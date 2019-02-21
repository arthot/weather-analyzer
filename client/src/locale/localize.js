import { connect } from 'react-redux'

export const localize = (component) => connect((state, own) => ({ ...own, locale: state.locale }))(component)
