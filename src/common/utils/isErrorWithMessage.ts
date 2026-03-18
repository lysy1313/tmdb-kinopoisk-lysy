export function isErrorWithMessage(error: unknown): error is { status_message: string } {
  return (
    typeof error === 'object' && error != null && 'status_message' in error && typeof error.status_message === 'string'
  );
}
