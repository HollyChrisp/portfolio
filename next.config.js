/** @type {import('next').NextConfig} */

import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'

const isDev = phase === PHASE_DEVELOPMENT_SERVER

const nextConfig = {
    output: "export",
    images: { unoptimized: true },
    assetPrefix: isDev ? undefined : "/portfolio"
}

module.exports = nextConfig
