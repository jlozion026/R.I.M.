import {applyArgsTypesEnhanceMap,applyInputTypesEnhanceMap,applyResolversEnhanceMap} from '../prisma/generated/type-graphql';

import argsTypesEnhanceMap from './enhanceMapConfigs/argsConfig';
import inputTypeEnhanceMap from './enhanceMapConfigs/inputConfig';
import resolversEnhanceMap from './enhanceMapConfigs/resolverConfig';

export function enhanceMaps() {
    
    const resolverTypes = applyResolversEnhanceMap(resolversEnhanceMap);    
    const argTypes = applyArgsTypesEnhanceMap(argsTypesEnhanceMap);
    const inputTypes = applyInputTypesEnhanceMap(inputTypeEnhanceMap);
    
    return {
        resolverTypes,
        argTypes,
        inputTypes,
    }

    
}
