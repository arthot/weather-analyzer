import { connect } from 'react-redux'

export const localize = (component) => connect(state => ({ locale: state.locale }))(component)
