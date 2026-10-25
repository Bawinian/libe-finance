const pages = ["about", "facilities", "bridge-finance", "working-capital", "rental-loans", "payroll-loans", "asset-financing", "contact"];

export default {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      ...pages.map((page) => ({ source: `/${page}.html`, destination: `/${page}`, permanent: true })),
    ];
  },
};
