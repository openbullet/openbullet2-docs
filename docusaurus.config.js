// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes } from "prism-react-renderer";
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "OpenBullet 2",
	tagline: "Documentation site",
	url: "https://openbullet.github.io",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "openbullet", // Usually your GitHub org/user name.
	projectName: "OpenBullet2", // Usually your repo name.

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],
	
	plugins: [
		[
			require.resolve("@easyops-cn/docusaurus-search-local"),
			({
			  hashed: true,
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "OpenBullet 2",
				logo: {
					alt: "Logo",
					src: "img/logo.svg",
				},
				items: [
					{
						href: "https://github.com/openbullet/openbullet2-docs",
						label: "Contribute",
						position: "right",
					},
					{
						href: "https://github.com/openbullet/OpenBullet2",
						label: "GitHub",
						position: "right",
					},
					{
						href: "https://discourse.openbullet.dev",
						label: "Forum",
						position: "right",
					},
				],
			},
			footer: {
				style: "dark",
				links: [],
				copyright: `Copyright © ${new Date().getFullYear()} OpenBullet`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
				additionalLanguages: ["ini"],
			},
		}),
};

module.exports = config;
