/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "design-system",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      providers: {
        cloudflare: {
          version: "5.40.0",
          apiToken: process.env.CLOUDFLARE_API_TOKEN,
        },
      },
    };
  },
  async run() {
    new sst.aws.StaticSite("DesignSystem", {
      build: {
        command: "pnpm build",
        output: "apps/docs/storybook-static",
      },
      domain: {
        name: "ui.arya.sh",
        dns: sst.cloudflare.dns({
          proxy: true,
        }),
      },
    });
  },
});
