import cx from 'classnames'

import { RowProps } from '../Form.types';

import styles from '../Form.module.scss';

import Input from './Input';
import { Plus } from 'assets/svg';

const Row: React.FC<RowProps> = ({inputs, index, remove}) => {
  return (
    <div className={styles.row}>
      <div className={styles.heading}>
        <h2>Beneficiary {index+1}</h2>
        {/* Check if the index is 0, if so, don't show the remove button */}
        {index > 0 && 
          <button type='button' className={styles.remove} onClick={()=>remove(index)} title="Remove this beneficiary">
            <Plus width="32" height="32" className={styles.remove__icon}/>
         </button>
        }
      </div>
      {/* Loop through the inputs and render them */}
      {inputs.map((input, iX) => {
        return (
          <div className={cx(styles.input, styles['column_'+input.columnSpan])} key={iX}>
            <Input type={input.type} name={input.name} index={index} placeholder={input.placeholder}/>
          </div>
        )
      })}
    </div>  
  )
}

export default Row