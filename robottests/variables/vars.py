from os import path
import urlparse

# You can override any of these at runtime by passing --variable NAME:value to robot.

# You can place an environment variable reference anywhere in this script as ${ENVVAR} and it will be replaced
# at runtime using python's string.Template parser.

# You can specify the baseurl or its components here, but be advised that passing it in to runtests as --target
# or as specific variables will override these settings.

TARGET_SCHEME = ""
TARGET_HOSTNAME = ""
TARGET_PORT = ""
TARGET_PATH = ""
TARGET_PARAMS = ""
TARGET_QUERY = ""
TARGET_FRAGMENT = ""
TARGET_NETLOC = "%s%s%s" % (TARGET_HOSTNAME, (":" if TARGET_PORT != "" else ""), TARGET_PORT)
BASEURL = urlparse.urlunparse((TARGET_SCHEME, TARGET_NETLOC, TARGET_PATH, TARGET_PARAMS, TARGET_QUERY, TARGET_FRAGMENT))

# Other defaults

PROJECT_NAME = "OTX Portal"
BROWSER = "chrome"
RESOURCES = path.basename(path.join("..", "resources"))
SELENIUM_IMPLICIT_WAIT = 0
SELENIUM_SPEED = 0
SELENIUM_TIMEOUT = 15
REMOTE_URL = ""
DESIRED_CAPABILITIES = ""
SCREEN_WIDTH = ${SCREEN_WIDTH}
SCREEN_HEIGHT = ${SCREEN_HEIGHT}
SCREEN_DEPTH = ${SCREEN_DEPTH}

