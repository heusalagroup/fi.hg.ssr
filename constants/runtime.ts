// Copyright (c) 2021. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { parseBoolean, parseNonEmptyString } from "../../../hg/core/modules/lodash";
import { LogLevel,  parseLogLevel } from "../../../hg/core/types/LogLevel";
import {
    BUILD_COMMAND_NAME,
    BUILD_LOG_LEVEL
} from "./build";

export const BACKEND_LOG_LEVEL       : LogLevel = parseLogLevel(parseNonEmptyString(process?.env?.BACKEND_LOG_LEVEL) ?? parseNonEmptyString(BUILD_LOG_LEVEL)) ?? LogLevel.INFO ;
export const BACKEND_SCRIPT_NAME     : string   = parseNonEmptyString(process?.env?.BACKEND_SCRIPT_NAME)                   ?? BUILD_COMMAND_NAME;
export const BACKEND_PORT            : number | string | false = normalizePort(process?.env?.PORT || '3000');

/**
 * This is optional address to the backend for frontend's HttpService.
 *
 * It is required for SSR frontend code to function correctly.
 */
export const BACKEND_API_URL : string | undefined = parseNonEmptyString(process?.env?.BACKEND_API_URL) ?? undefined;

/**
 * Enable local proxy.
 */
export const BACKEND_API_PROXY_ENABLED : boolean = `${(process?.env?.BACKEND_API_PROXY_ENABLED ?? 'true')}`.toLowerCase() === 'true';

/**
 * This is optional address to the backend for local proxy.
 *
 * Path /api/* will be redirected to that address if this variable is defined.
 *
 * This is only useful in the development, since in the production the Nginx will be redirecting traffic.
 */
export const BACKEND_API_PROXY_URL : string | undefined = BACKEND_API_PROXY_ENABLED ? (parseNonEmptyString(process?.env?.BACKEND_API_PROXY_URL) ?? BACKEND_API_URL) : undefined;

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort (val : string) : number | string | false {
    const port = parseInt(val, 10);
    if (isNaN(port)) return val;
    if (port >= 0) return port;
    return false;
}

