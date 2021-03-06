/**
 * This program and the accompanying materials are made available under the terms of the
 * Eclipse Public License v2.0 which accompanies this distribution, and is available at
 * https://www.eclipse.org/legal/epl-v20.html
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Copyright IBM Corporation 2018
 */

import { Map } from 'immutable';

const ROOT_TREE_ID = 'treeDS';

export const baseTree = Map({
    id: ROOT_TREE_ID,
    DSChildren: Map({}),
    isFetching: false,
    isToggled: false,
    DSPath: '',
});

export const DSPathSetTree = Map({
    id: ROOT_TREE_ID,
    DSChildren: Map({}),
    isFetching: false,
    isToggled: false,
    DSPath: 'JCAIN',
});

export const toggledTree = Map({
    id: ROOT_TREE_ID,
    DSChildren: Map({}),
    isFetching: false,
    isToggled: true,
    DSPath: '',
});

export const requestedChildrenTree = Map({
    id: ROOT_TREE_ID,
    DSChildren: Map({}),
    isFetching: true,
    isToggled: false,
    DSPath: 'JCAIN',
});

export const restDSChildren = Map({
    id: ROOT_TREE_ID,
    DSChildren: Map({}),
    isFetching: false,
    isToggled: true,
    DSPath: 'JCAIN',
});

export const DSChildData = [
    {
        name: 'JCAIN',
    },
    {
        blksize: '3213',
        dsorg: 'PO',
        lrecl: '80',
        name: 'JCAIN.SPF.ISPROF',
        recfm: 'FB',
    },
    {
        blksize: '5213',
        dsorg: 'PS',
        lrecl: '125',
        name: 'JCAIN.SPFLOG1.LIST',
        recfm: 'VA',
    },
];

export const receivedDSChildrenTree = Map({
    id: ROOT_TREE_ID,
    DSChildren: Map({
        'JCAIN.SPF.ISPROF': 'PO',
        'JCAIN.SPFLOG1.LIST': 'PS',
    }),
    isFetching: false,
    isToggled: true,
    DSPath: 'JCAIN',
});

export const receivedDSChildrenForDelete = Map({
    id: ROOT_TREE_ID,
    DSChildren: Map({
        'ATLAS.TEST.JCL': 'PO',
        'ATLAS.JEST.TCL': 'PS',
    }),
    isFetching: false,
    isToggled: true,
    DSPath: 'ATLAS',
});

export const receivedDSChildrenAfterDelete = Map({
    id: ROOT_TREE_ID,
    DSChildren: Map({
        'ATLAS.JEST.TCL': 'PS',
    }),
    isFetching: false,
    isToggled: true,
    DSPath: 'ATLAS',
});
