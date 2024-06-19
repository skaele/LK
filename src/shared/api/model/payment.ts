export interface IPaymentItem {
    date: string
    value: string
}

export type Paygraph = {
    date_end: string
    date_plan: string
    date_start: string
    semestr: string
    sum: string
    sum_pay: string
    sum_price: string
    year: string
}

export interface PaymentsContract {
    agreements: any[]
    balance: string
    balance_currdate: string
    bill: string
    can_sign: boolean
    contragent: string
    dorm_num: string
    dorm_room: string
    endDateFact: string
    endDatePlan: string
    file: string
    id: string
    lastPaymentDate: string
    level: string
    name: string
    number: string
    paygraph: Paygraph[]
    payments: IPaymentItem[]
    qr_current: string
    qr_total: string
    sign_text: string
    signed_user: boolean
    signed_user_date: string
    signed_user_time: string
    startDate: string
    student: string
    sum: string
    type: string
    sides: string
    user_fio: string
    user_email: string
    client_fio: string
    client_email: string
}

export interface Agreement {
    can_sign: boolean
    client_email: string
    client_fio: string
    code_sent: boolean
    date: string
    file: string
    id: string
    name: string
    reason: string
    sides: string
    signed_user: boolean
    signed_user_date: string
    signed_user_time: string
    type: string
    user_email: string
    user_fio: string
}

export interface LoadPayments {
    contracts: {
        dormitory: PaymentsContract[]
        education: PaymentsContract[]
    }
}

export interface Payments {
    dormitory: PaymentsContract[]
    education: PaymentsContract[]
}
