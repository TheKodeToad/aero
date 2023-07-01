/**
 * This file is part of Aero, a next-generation Discord mod empowering users and developers alike.
 * Copyright (c) 2023 TheCommieAxolotl & contributors.
 *
 * Aero is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Aero is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Aero. If not, see <https://www.gnu.org/licenses/>.
 */

import { Filters, getModule, waitFor, globalPromise, common, __webpack_require__ } from "./api/webpack";
import { openDocumentationPageWithString, openByName } from "./api/docs";
import * as components from "./ui/components";
import * as menu from "./api/patcher/menu";
import { plugins } from "./api/plugins";
import { proxy } from "./api/settings";
import { themes } from "./api/themes";
import patcher from "./api/patcher";
import * as dom from "./api/dom";

export default {
    settings: proxy,
    plugins,
    themes,
    docs: {
        openDocumentationPageWithString,
        openByName,
    },
    contextMenu: {
        patch: menu.patch,
        unpatch: menu.unpatch,
        _patchContext: menu._patchContext,
    },
    webpack: {
        get: getModule,
        waitFor,
        Filters,
        common,
        globalPromise,
        get require() {
            return __webpack_require__;
        },
    },
    dom,
    patcher,
    components,
};
