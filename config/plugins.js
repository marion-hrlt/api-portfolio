module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_vR0ZnBVyaOwyeE2l2zsO4tLwEWcE/AvWp9hD38r",
      apiToken: "RgjOSBQA6juC5mRQwsoULW3G",
      appFilter: "api-portfolio",
      roles: ["strapi-super-admin"],
    },
  },
});
