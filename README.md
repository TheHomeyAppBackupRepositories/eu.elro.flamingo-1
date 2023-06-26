# Flamingo

Adds support for wireless Flamingo devices.

## What's new

### v3.1.0
Internal changes. This update contains a rewrite using new Homey codebases for RF.<br/>
Rewrote FA500x devices. Please re-pair the devices as the old pairing is not compatible with the new driver (the old paired devices are not compatible with the new version).<br/>
It is now possible to generate a signal for the FA500x sockets rather then clone the remote.

#### v3.0.0
Rewrite to SDK2
Deprecated the way FA500S sockets copied the signal from the remote. Already paired sockets should still work the same but to pair a new socket Homey will need to generate a new signal for the socket.
Added the Flamingo SF501S and SF501R

#### v2.3.3
Improved signal definition for flamingo dipswitch devices

#### v2.3.2
Fixed flamingo FA500S switch which was not able to pair for more than once every time the app starts

#### v2.3.0
Added FA21RF smoke detector. With thanks to @wingleader for testing and recording the smoke detector signal.
Added ability to test smoke sensor. 

#### v2.2.0
Added E button in flow cards for AB400DSS remote<br/>
Fixed remote buttons being clickable in test pair screen<br/>
Added logging and error reporting
