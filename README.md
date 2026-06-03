# Nosey MEMS

**/ˈnɔɪzi miːmz/** — a fully open-source nasometer.

Nosey MEMS is a general purpose **mono MEMS microphone preamp**. It was specifically designed for integration with **Nosey** ([GitHub](https://github.com/phoneticslab/nosey) [Paper, IS25](https://www.isca-archive.org/interspeech_2025/dewhurst25_interspeech.pdf)) for acoustic nasalance measurements. A **stereo pair of boards** — one nasal, one oral — in the (not yet) adapted Nosey 3D-printed handle and baffle.

## What you get

- Open **KiCad 10.0** schematic, PCB and JLCPCB production files
- Small 25 × 50 mm board: NA-FFA381-A10-1 MEMS mic, OPA1652 balanced output, +48V phantom via XLR3
- Simple, low-cost (~€20 per built board as of June 2026), low-maintenance design
- Built for general purpose, aimed at phonetics, but the schematic/PCB can be adapted to any use

## Where to look

- **Documentation:** [porupski.github.io/Nosey_MEMS](https://porupski.github.io/Nosey_MEMS/)
- **`KiCad_files/`** — schematic, PCB layout, production `.zip`
- **`REW_files/`** — measured frequency response (Mk1 measurements, but the circuity is basically identical)
- **`docs/legacy_mk1/`** — the first, stereo Mk1 design (superseded)

## Status

In active development. The mono Mk2 replaces the earlier single-board stereo prototype, whose shared layout compromised acoustic separation between the nasal and oral channels.

## References

- Dewhurst et al. (2025). *Nosey: Open-source hardware for acoustic nasalance.* [arXiv:2505.23339](https://arxiv.org/pdf/2505.23339) · [IS25 PDF](https://www.isca-archive.org/interspeech_2025/dewhurst25_interspeech.pdf)
