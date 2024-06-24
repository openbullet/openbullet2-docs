import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import type { Props } from "@theme/PaginatorNavLink";

export default function PaginatorNavLink(props: Props): JSX.Element {
	const { permalink, title, subLabel, isNext } = props;

	// Transform e.g. /docs/installation/windows/web-client to Installation | Windows | Web Client
	const betterTitle = permalink
		.replace("/docs/", "")
		.replace(/\//g, " | ")
		.replace(/-/g, " ")
		.replace(/\b\w/g, (char) => char.toUpperCase());

	return (
		<Link
			className={clsx(
				"pagination-nav__link",
				isNext ? "pagination-nav__link--next" : "pagination-nav__link--prev",
			)}
			to={permalink}
		>
			{subLabel && <div className="pagination-nav__sublabel">{subLabel}</div>}
			<div className="pagination-nav__label">{betterTitle}</div>
		</Link>
	);
}
