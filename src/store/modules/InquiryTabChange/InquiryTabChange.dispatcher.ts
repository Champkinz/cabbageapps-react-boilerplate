import { createAllDispatchers } from "../../store.utils";
import { inquiryTabsStateSliceActions } from "./InquiryTabChange.slice";

export const { setInquiryTab } = createAllDispatchers(
  inquiryTabsStateSliceActions
);
