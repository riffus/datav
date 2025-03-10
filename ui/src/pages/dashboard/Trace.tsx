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

import React from "react"
import { useParams } from "react-router-dom"
import TraceDetailWrapper from "src/views/dashboard/plugins/panel/trace/components/TraceDetail/TraceDetailWrapper"



const TracePage = () => {
    const params = useParams()
    return (params.id && params.datasourceId && <TraceDetailWrapper id={params.id} dsId={params.datasourceId}/>)
}

export default TracePage
