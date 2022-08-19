import type { ComponentProductInformationSection } from '@ecommerce/shared/graphql/types';
import { Item } from './Components/Item';

export interface ProductInformationProps {
  information: (Omit<ComponentProductInformationSection, 'id'> | null)[];
}

export const ProductInformation: React.FC<ProductInformationProps> = (
  props
) => {
  const { information } = props;

  return (
    <ul>
      {information.map(
        (information) =>
          information && <Item key={information.title} data={information} />
      )}
    </ul>
  );
};
