import styled from 'styled-components';
import { rem } from 'polished';

import Form from '@Components/Form';

export const Model = styled(Form)`
  background: white;
  position: absolute;
  width: 90%;
  height: 90%;
  top: ${rem(-50)};
  right: 0;
  border-radius: 20px 0 0 20px;
`;
