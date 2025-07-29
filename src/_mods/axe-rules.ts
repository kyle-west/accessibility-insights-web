import { DecoratedAxeNodeResult } from 'common/types/store-data/visualization-scan-result-data';

export function axeCheckOverrides(result: DecoratedAxeNodeResult): DecoratedAxeNodeResult {
    // Custom logic to override the default behavior
    // For example, you might want to treat certain results as passing
    // even if they fail the standard checks.
    if (result.ruleId === 'autocomplete-valid') {
        if (result.html.includes('autocomplete="chrome-off"')) {
            result.status = true; // Override to pass if "chrome-off" is found
        }
    }
    return result;
}
