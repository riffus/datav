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

{/* <Box display="flex" justifyContent="right"><Decoration6 style={{height: '20px',width:"10%",position:"absolute",top:"",left:""}} /></Box> */ }

import React from "react"
import { Box } from "@chakra-ui/react"
import { memo } from "react"
import { DecorationStyles, PanelDecorationType } from "types/panel/styles"
import Decoration1 from "../decoration/Decoration1"
import Decoration10 from "../decoration/Decoration10"
import Decoration12 from "../decoration/Decoration12"
import Decoration2 from "../decoration/Decoration2"
import Decoration3 from "../decoration/Decoration3"
import Decoration4 from "../decoration/Decoration4"
import Decoration5 from "../decoration/Decoration5"
import Decoration6 from "../decoration/Decoration6"
import Decoration8 from "../decoration/Decoration8"
import Decoration9 from "../decoration/Decoration9"

interface Props {
    decoration: DecorationStyles
}

const Decoration = memo(({ decoration }: Props) => {
    return <Box display="flex" justifyContent={decoration.justifyContent}><Inner decoration={decoration} /></Box>
})

const Inner = ({ decoration }: Props) => {
    const s = {
        position: 'absolute' as any,
        width: decoration.width,
        height: decoration.height,
        top: decoration.top,
        left: decoration.left
    }
    switch (decoration.type) {
        case PanelDecorationType.Decoration1:
            return <Decoration1 style={s} reverse={decoration.reverse} />
        case PanelDecorationType.Decoration2:
            return <Decoration2 style={s} reverse={decoration.reverse} />
        case PanelDecorationType.Decoration3:
            return <Decoration3 style={s} reverse={decoration.reverse} />
        case PanelDecorationType.Decoration4:
            return <Decoration4 style={s} reverse={!decoration.reverse} />
        case PanelDecorationType.Decoration5:
            return <Decoration5 style={s} reverse={decoration.reverse} />
        case PanelDecorationType.Decoration6:
            return <Decoration6 style={s} reverse={decoration.reverse} />
        case PanelDecorationType.Decoration8:
            return <Decoration8 style={s} reverse={decoration.reverse} />
        case PanelDecorationType.Decoration9:
            return <Decoration9 style={s} reverse={decoration.reverse} />
        case PanelDecorationType.Decoration10:
            return <Decoration10 style={s} reverse={decoration.reverse} />
        case PanelDecorationType.Decoration12:
            return <Decoration12 style={s} reverse={decoration.reverse} />

        default:
            return <></>
    }
}
export default Decoration