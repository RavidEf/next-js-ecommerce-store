import type { NextConfig } from 'next';\n\nconst nextConfig: NextConfig = {\n  experimental: {\n    dynamicIO: true,\n    typedRoutes: true,\n  },\n};\n\nexport default nextConfig;
