import { SDK } from "../../sdk";

export const AccountInquirySchema = {
  name: "Transaction Inquiry",
  listView: {
    // Notes
    // export interface Transaction {
    //     accountId: string;
    //     transactionId: string;
    //     transactionReference: string;
    //     amount: Amount;
    //     creditDebitIndicator: string;
    //     status: string;
    //     bookingDateTime: string;
    //     valueDateTime: string;
    //     bankTransactionCode: BankTransactionCode;
    //     balance: Balance;
    //   }
    fields: [
      {
        id: "transactionId",
        label: "Transaction Number",
        field: "transactionId",
        type: "STRING",
      },
      {
        id: "valueDateTime",
        label: "Value Date",
        field: "valueDateTime",
        type: "DATE",
      },
      {
        id: "valueDateTime",
        label: "Value Date",
        field: "valueDateTime",
        type: "TAG",
      },
    ],
  },
  inidividualView: {
    cards: [
      {
        title: "Transaction Detail",
        fields: [
          {
            key: "",
            label: "",
            type: "TEXT_STRING",
          },
        ],
        // use FormItemSchema interface
      },
    ],
  },
  apis: {
    list: {
      sdk: (SDK: SDK) => [],
      arrayField: "data.transactions",
      paginationType: 1,
    },
    getById: {
      //
    },
  },
};
