import cx from 'classnames';

import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void | null
  type: 'button' | 'submit'
  style: 'primary' | 'secondary' | 'outline'
  disabled?: boolean
  title: string
}

const Button: React.FC<ButtonProps> = ({children, onClick, type = 'button', style = 'primary', disabled = false, title}) => {
  return (
    <button type={type} className={cx(styles.root, styles[style])} onClick={()=>onClick()} disabled={disabled} title={title}>
      {children}
    </button>
  )
}

export default Button