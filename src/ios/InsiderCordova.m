#import "InsiderCordova.h"

#import <Cordova/CDVAvailability.h>

@implementation InsiderCordova

- (void)pluginInitialize {
}

- (void)tagEvent:(CDVInvokedUrlCommand *)command {
  NSString* event = [command.arguments objectAtIndex:0];
    NSLog(@"event: %@", event);
    NSLog(@"Command: %@", command);
}

@end
