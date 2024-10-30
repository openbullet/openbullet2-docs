---
uid: contrib-issues
title: Reporting Issues
---

# Reporting Issues

This page discusses how to open issues or request a feature including the policies and procedures of the OpenBullet2 project around handling issues.

All other discussions, including initial troubleshooting, should be directed towards [our forum](https://discourse.openbullet.dev/).

## Requesting Features

Please note that feature and enhancement requests should be directed towards this [link](https://github.com/openbullet/OpenBullet2/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.md&title=%5BREQUEST%5D).

## Searching and Voting

Before opening an issue, please [search the existing issues](https://github.com/openbullet/OpenBullet2/issues?q=is%3Aissue) to see if a similar problem or feature request has been reported. Duplicate issues clutter the repository and should be avoided.

If you do find an issue that matches, or closely matches, your issue, please make use of the :+1: reaction to confirm the issue also affects you or that you support the feature request. If you wish, add a comment as well describing your version of the issue or feature use case.

If the existing issue is closed, please read through it to see if the accepted workaround(s) apply to your case. If not, leave a comment and the issue will be reopened. Note that, since PRs go into `dev` first but releases are built from `master`, an issue's fix won't be immediately available in the official sources, but will be included in the next release.

## Opening an Issue

Once you're ready to open an issue, please [see this page](https://github.com/openbullet/OpenBullet2/issues/new/choose)!

### Reporting Bugs

When writing a bug issue, please ensure you capture as much relevant detail as possible - this is very important to assist in troubleshooting and triaging/investigating the issue. Some useful elements include:

- How you installed OpenBullet2 (upgrade or fresh install)

- What platform and operating system you are using (Debian, Windows, Docker, etc...)

- What you were doing that caused the issue to appear

- Any relevant log output

- Any non-standard configurations you use

Bugs should be tagged with `[bug]` at the beginning of their title. This will later be removed by the OpenBullet2 team when assigning labels. To assist in triaging, if you know which other [label(s)](/docs/general/contributing/issues#issue-labels) should be applied to your issue, please add them after the `[bug]` label.

Bugs should be reproduceable. That is, you should be able to have determined through troubleshooting how to replicate the issue. While one-time bugs should not be ignored, if they're difficult or impossible to reproduce, it's likely very hard to fix them. Please attempt to reproduce the bug before filing the issue and include the smallest test case you can to demonstrate it.

If you ever need assistance for troubleshooting or opening an issue, please [contact the community](https://discourse.openbullet.dev/) and we'll try to help you out!

## Issue Labels

OpenBullet features a number of issue labels to assist in triaging and managing issues. Users cannot assign these themselves due to GitHub's permissions, but they will be added by a team member during triaging.

### Categories

These labels are broad categories for which part of the codebase is affected.

- `area:backend`: An issue that mainly relates to the server backend code.
- `area:frontend`: An issue that mainly relates to the server frontend code.
- `area:deployment`: An issue that mainly relates to the build process.
- `area:tooling`: An issue that mainly relates to the tooling and test code.

### Libraries

These labels determine on which library, an issue is related.

- `lib:core`: An issue related to the core library.
- `lib:rurilib`: An issue related to the rurilib library.

### Client

These labels determine on which client, an issue is related.

- `client:native`: An issue that appears on native client.
- `client:web`: An issue that appears on web client.

### Criticality

These labels help determine how critical an issue is.

- `regression`: An issue in need of immediate attention due to a regression from the last build.
- `bug`: A bug in the code that affects normal usage.

### Management

These labels help assist in managing the project and direction.

- `enchancement`: A new feature or request.
- `good first issue`: Something that should be very straightforward to do and is a great place to get started.
- `help wanted`: An issue that currently has no clear expert within the project and could use outside assistance.

### Pull Requests

These labels apply only to pull requests for administrative purposes.

- `requires testing`: A PR that has not been tested in a live environment yet. Any major backend-affecting PRs should be tested before being merged to avoid regressions.