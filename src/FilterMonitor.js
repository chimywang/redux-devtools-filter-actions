import { cloneElement, Component, PropTypes } from 'react';

export default class FilterMonitor extends Component {
  static update = () => ({});

  static propTypes = {
    children: PropTypes.element,
    filter: PropTypes.shape({
      whitelist: PropTypes.array,
      blacklist: PropTypes.array
    })
  };

  render() {
    const { filter, children, ...childProps } = this.props;
    return cloneElement(children, childProps);
  }
}
