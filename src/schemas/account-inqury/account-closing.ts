import { SDK } from "../../sdk";

const AccountClosing_HelperFunction = {
  getCurrentSystemUser: () => {
    return "TED";
  },
  todaysDate: () => {
    return new Date().getTime();
  },
};

export const AccountClosing = {
  name: "Account Closing Creation",
  module: "Account Management",
  steps: [
    {
      title: "Acccount Closing Charges",
      description: "Acccount Closing Chargesvfadsv f",
      fields: [
        {
          label: "Account Closing User",
          isReadOnly: true,
          type: "TEXT_STRING",
          valueFunction: AccountClosing_HelperFunction.getCurrentSystemUser,
        },
        {
          label: "Account Closing User",
          isReadOnly: true,
          type: "TEXT_STRING",
          valueFunction: AccountClosing_HelperFunction.todaysDate,
        },
        {
          label: "Closing Reason",
          type: "SELECT",
          key: "remark",
          values: [
            {
              id: "fadf",
              label: "Dfafdsaf",
            },
            {
              id: "fadf",
              label: "Dfafdsaf",
            },
            {
              id: "fadf",
              label: "Dfafdsaf",
            },
          ],
        },
        {
          label: "Closing Reason",
          type: "REMOTE_SELECT",
          key: "remark",
          spec: {
            api: (SDK: SDK) => [],
            id: "",
            label: "",
          },
        },
        {
          label: "Account Closing User",
          isReadOnly: true,
          key: "",
          type: "TEXT_STRING",
          valueFunction: AccountClosing_HelperFunction.getCurrentSystemUser,
        },
      ],
    },
  ],
  apis: {
    // Notes
    // export interface AccountCloseDetResource {
    //     accountNoId: string;
    //     actualAmount: string;
    //     balanceAmount: string;
    //     charges?: Array<ChargeAddResource>;
    //     id?: string;
    //     interestAmount: string;
    //     remark: string;
    //     taxDetail?: Array<AccountCloseCreateTaxResource>;
    //     tenantId?: string;
    //     totalChargeAmount: string;
    //     totalTaxAmount: string;
    //   }
    accountClose: (SDK: SDK) => [],
    formGenerationData: (SDK: SDK) => [],
  },
};
