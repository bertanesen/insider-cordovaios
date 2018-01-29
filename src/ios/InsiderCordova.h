#import <Cordova/CDVPlugin.h>

@interface InsiderCordova : CDVPlugin {
}

- (void)tagEvent:(CDVInvokedUrlCommand *)command;

@end
