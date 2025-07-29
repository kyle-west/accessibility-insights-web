import { DecoratedAxeNodeResult } from 'common/types/store-data/visualization-scan-result-data';

// Custom logic to override the default behavior
// For example, you might want to treat certain results as passing
// even if they fail the standard checks.
export function axeCheckOverrides(result: DecoratedAxeNodeResult): DecoratedAxeNodeResult {
    // Override to pass if "chrome-off" is found
    if (result.ruleId === 'autocomplete-valid') {
        if (result.html.includes('autocomplete="chrome-off"')) {
            result.status = true;
        }
    }

    return result;
}
