// Copyright (c) 2017 Uber Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import type React from 'react';

import DraggableManager from './DraggableManager';
import EUpdateTypes from './EUpdateTypes';
import { TNil } from 'types/misc';

export type DraggableBounds = {
  clientXLeft: number;
  maxValue?: number;
  minValue?: number;
  width: number;
};

export type DraggingUpdate = {
  event: React.MouseEvent<any> | MouseEvent;
  manager: DraggableManager;
  tag: string | TNil;
  type: EUpdateTypes;
  value: number;
  x: number;
};
