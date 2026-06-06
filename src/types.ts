/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ActiveTab =
  | "home"
  | "about"
  | "how-it-works"
  | "solutions"
  | "calculator"
  | "market-support"
  | "contact-info"
  | "kyc"
  | "dashboard";

export interface CryptoAsset {
  id: string;
  symbol: string;
  name: string;
  logoUrl?: string; // fallback
  priceUsd: number;
  change24h: number;
  marketCap: number;
  volume24h?: number;
}

export type LoanStatus =
  | "unapplied"
  | "application_submitted"
  | "review_in_progress"
  | "verification_complete"
  | "approved"
  | "collateral_payment_required"
  | "collateral_received"
  | "loan_released"
  | "completed";

export interface LoanApplication {
  id: string;
  loanAmount: number;
  selectedAssetSymbol: string;
  repaymentDuration: number; // in months
  status: LoanStatus;
  collateralPaid: boolean;
  appliedDate: string;
  dueDate: string;
  interestRate: number; // e.g. 5.5% annual
  monthlyRepayment: number;
  collateralRequired: number; // measured in the selected asset
  originationFee: number;
}

export interface UserKycProfile {
  fullName: string;
  email: string;
  phone: string;
  documentType: "id_card" | "passport" | "drivers_license";
  documentNumber: string;
  kycStatus: "unsubmitted" | "pending" | "verified" | "rejected";
  addressLine: string;
  country: string;
  idUploaded: boolean;
  addressUploaded: boolean;
  selfieUploaded: boolean;
  signedAgreement: boolean;
}

export interface WalletState {
  address: string | null;
  status: "disconnected" | "connecting" | "connected";
  balanceEth: number;
}

export interface SupportTicket {
  id: string;
  subject: string;
  category: string;
  status: "open" | "resolved";
  createdAt: string;
  messages: Array<{
    sender: "user" | "support";
    text: string;
    timestamp: string;
  }>;
}

export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  time: string;
  read: boolean;
  timestamp?: string;
}
