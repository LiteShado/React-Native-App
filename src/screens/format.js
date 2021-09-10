/**
 * Screen Format & Function Protocols
 *
 * Screens should be named with a clear, relevant word or two. In cases of overlap,
 * for instance Signup might have multiple screens to accomplish its task, give the
 * screen a page#, e.g. SignupP1, SignupP2, etc.
 *
 * All screens should have imports at the top of the file,
 * first react imports, then component or utility imports, and
 * finally style imports.
 *
 * Within the exported screen component, any and all functions need to be
 * defined before the component return statement. Clean code with clear function,
 * and variable names will be standard along with comprehensive documentation for
 * each block of code.
 *
 * Any packages or libraries that need to be used must be checked for vulnerabilities,
 * and all vulnerabilities should be listed in this log:
 * https://docs.google.com/spreadsheets/d/1g-x5dT-rXuGlqCq_UuzQm0wsZv_AyhhU-RFHVeiCU5U/edit#gid=341690146
 *
 * A screen does not need to be "complete" to be pushed to the github repo. However,
 * there can be no bugs of any sort in the main branch of the repository, and
 * whichever components are featured on the screen need to be complete.
 *
 * If there are any ambiguous styles/positionings/components in the design file, get as
 * close as possible to the appearance of the screen, and make a clear note of the issue.
 * Questions about whatever styles are unclear should be asked at mid-week and end-week
 * dev-check ins.
 *
 * For instances where the backend api calls are not set up, be sure that whatever
 * information gathered from the user, or for the user is available to be refactored
 * upon completion of that portion of the backend. Leave a clear comment inside the code
 * block that will need refactoring about the type(s) of data sent or received and the
 * destination of the data (along with processing info if relevant).
 *
 * NOTE!!: Images should be loaded statically or there can be slowdown issues at runtime. For instance,
 * if an element needs a source, it SHOULD look like:
 * <GenericImageElement source={require('./assets/image.png')} />
 * It should NOT look like:
 * <GenericImageElement source={require(`./assets/${icon}`)} /> or <GenericImageElement source={require('./assets/' + imageVariable + '.png')} />
 *
 * If there is a situation where format or syntax of a particular element is not
 * stipulated here, try to match the rest of the codebase as best as can be done,
 * and make a note of it. A question about this should be asked as soon as possible,
 * and a protocol will be determined for such a situation.
 */
