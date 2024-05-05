export const SET_GLOBAL_VARIABLE = 'SET_GLOBAL_VARIABLE';

export const setGlobalVariable = (variableName, variableValue) => ({
 type: SET_GLOBAL_VARIABLE,
 payload: { variableName, variableValue },
});