import React from "react";
import {WidgetCreateInput, WidgetType} from "../../../Graphql/clientTypes";
import LoadingFc from "../../miniComponent/loading";
import {addMeWidget, AUTO_WIDGET_ORDER} from "../utils/newWidget";
import {AddWidgetForm} from "../utils/addWidgetForm";

interface IcnbWidgetState {
    name: string
}