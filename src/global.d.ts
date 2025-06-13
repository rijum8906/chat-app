export {};

declare global {
  interface Window {
    google: {
      accounts: {
        id: {
          initialize: (options: google.accounts.id.IdConfiguration) => void;
          prompt: (callback?: (notification: google.accounts.id.PromptMomentNotification) => void) => void;
          renderButton: (
            parent: HTMLElement,
            options: google.accounts.id.GsiButtonConfiguration
          ) => void;
        };
      };
    };
  }
}