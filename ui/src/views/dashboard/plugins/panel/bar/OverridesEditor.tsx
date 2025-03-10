// Copyright 2023 Datav.io Team
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

// Render series table in tooltip

import { ColorPicker } from "src/components/ColorPicker";
import { EditorInputItem, EditorNumberItem, EditorSliderItem } from "src/components/editor/EditorItem";
import { UnitPicker } from "src/components/Unit";
import { OverrideRule } from "types/dashboard";
import React from "react";
import ThresholdEditor from "src/components/Threshold/ThresholdEditor";
import { Switch } from "@chakra-ui/react";

interface Props {
    override: OverrideRule
    onChange: any
}


const BarOverridesEditor = ({ override, onChange }: Props) => {
    switch (override.type) {
        // case BarRules.SeriesStyle:
        //     return <RadionButtons size="sm" options={[{ label: "Lines", value: "lines" }, { label: "Bars", value: "bars" }, { label: "points", value: "points" }]} value={override.value} onChange={onChange} />
        case BarRules.SeriesName:
            return <EditorInputItem value={override.value} onChange={onChange} size="sm" placeholder="change series name" />
        case BarRules.SeriesUnit:
            return <UnitPicker size="sm" value={override.value} onChange={onChange} />
        case BarRules.SeriesColor:
            return <ColorPicker color={override.value} onChange={onChange} />
        case BarRules.SeriesFill:
            return <EditorSliderItem value={override.value} min={10} max={100} step={1} onChange={onChange} />
        case BarRules.SeriesNegativeY:
           return <Switch defaultChecked={override.value} onChange={e => onChange(e.currentTarget.checked)} />
        case BarRules.SeriesYAxist:
            return <></>
        case BarRules.SeriesDecimal:
            return <EditorNumberItem value={override.value} min={0} max={5} step={1} onChange={onChange} />
        case BarRules.SeriesThresholds:
            return <ThresholdEditor value={override.value} onChange={onChange} />
        default:
            return <></>
    }

}

export default BarOverridesEditor


export enum BarRules {
    SeriesName = 'Series.name',
    SeriesUnit = 'Series.unit',
    SeriesDecimal = 'Series.decimal',
    SeriesColor = 'Series.color',
    SeriesFill = 'Series.fillOpacity',
    SeriesNegativeY = 'Series.negativeY',
    SeriesYAxist = 'Series.separateYAxis',
    SeriesThresholds = "Series.thresholds"
} 