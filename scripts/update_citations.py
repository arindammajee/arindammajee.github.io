#!/usr/bin/env python3
"""Refresh aggregate Google Scholar metrics into src/data/scholar.json.

Run at build time (see .github/workflows/deploy.yml). Google Scholar has no
public API and blocks datacenter IPs, so a fetch from CI can fail or get
CAPTCHA'd. This script is therefore FAIL-SAFE: if the fetch fails or returns
implausible values, it leaves the existing committed scholar.json untouched
and exits 0, so the build always deploys with last-known-good numbers.

Only aggregate metrics (total citations, h-index, i10-index) are fetched —
they need a single profile read. Per-paper counts stay static in data.ts.
"""

import json
import os
import sys

SCHOLAR_ID = "sqGrHcoAAAAJ"
OUT_PATH = os.path.join(os.path.dirname(__file__), "..", "src", "data", "scholar.json")


def load_existing():
    try:
        with open(OUT_PATH, "r", encoding="utf-8") as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return None


def fetch_metrics():
    # Imported lazily so a missing dependency doesn't crash the fail-safe path.
    from scholarly import scholarly

    author = scholarly.search_author_id(SCHOLAR_ID)
    author = scholarly.fill(author, sections=["basics", "indices"])
    return {
        "citations": int(author.get("citedby", 0)),
        "hindex": int(author.get("hindex", 0)),
        "i10index": int(author.get("i10index", 0)),
    }


def is_plausible(metrics, existing):
    # Guard against a "successful" fetch that returns zeros/garbage, which
    # would otherwise wipe good data. Never let the number regress badly.
    if not metrics or metrics["citations"] <= 0 or metrics["hindex"] <= 0:
        return False
    if existing and metrics["citations"] < existing.get("citations", 0) * 0.5:
        # A >50% drop almost certainly means a bad scrape, not reality.
        return False
    return True


def main():
    existing = load_existing()
    try:
        metrics = fetch_metrics()
    except Exception as exc:  # noqa: BLE001 — any failure must be non-fatal
        print(f"[update_citations] fetch failed, keeping existing data: {exc}")
        return 0

    if not is_plausible(metrics, existing):
        print(f"[update_citations] implausible result {metrics}, keeping existing data")
        return 0

    metrics["scholarId"] = SCHOLAR_ID
    os.makedirs(os.path.dirname(OUT_PATH), exist_ok=True)
    with open(OUT_PATH, "w", encoding="utf-8") as f:
        json.dump(metrics, f, indent=2)
        f.write("\n")
    print(f"[update_citations] wrote {metrics}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
