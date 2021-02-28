import React, { Fragment, useCallback } from 'react';
import { Delete } from '@material-ui/icons';

import { useCardContext } from '../CardContext';

export default function CardLogoInput() {
  const { logo, setLogo } = useCardContext();

  const handleChangeLogo = useCallback((elem: HTMLInputElement) => {
    const files = elem?.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.addEventListener('load', (e) => {
        if (typeof e?.target?.result === 'string') {
          setLogo(e?.target?.result);
        }
      });
      reader.readAsDataURL(file);
    }
  }, []);
  return (
    <div>
      <label>Logo</label>
      {logo ? (
        <Fragment>
          <br />
          <img src={logo} width={30} title="logo" />
          <Delete
            fontSize="inherit"
            style={{ cursor: 'pointer' }}
            onClick={() => setLogo('')}
          />
        </Fragment>
      ) : (
        <input
          type="file"
          accept=".png,.jpg"
          onChange={(e) => handleChangeLogo(e.target)}
        />
      )}
    </div>
  );
}
