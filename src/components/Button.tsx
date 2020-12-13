import * as React from 'react';

const style = (block: boolean) => ({
  backgroundColor: "#00D1B2",
  border: '0px',
  padding: '10px 15px',
  color: '#fff',
  marginBottom: '10px',
  borderRadius: '4px',
  width: block ? '100%' : undefined
})

interface IButtonProps {
  block?: boolean
}

export default class Button extends React.Component<IButtonProps> {
  public render() {
    const { block = false } = this.props;
    return (
      <button {...this.props} style={style(block)} />
    )
  }
}