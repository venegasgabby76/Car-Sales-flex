
export const ADDED_FEATURE = 'ADDED_FEATURE';
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = newFeature => {
    return {type: ADDED_FEATURE, payload: newFeature}
}

export const removeFeature = removedFeature => {
    return {type: REMOVE_FEATURE, payload: removedFeature};
}