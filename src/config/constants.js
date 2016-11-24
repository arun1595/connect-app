/*
 * ACTIONS
 */

// Auth
export const LOAD_USER_SUCCESS     = 'LOAD_USER_SUCCESS'
export const LOAD_USER_FAILURE     = 'LOAD_USER_FAILURE'

// Search Term
export const SET_SEARCH_TERM   = 'SET_SEARCH_TERM'
export const SET_SEARCH_TAG    = 'SET_SEARCH_TAG'
export const RESET_SEARCH_TERM = 'RESET_SEARCH_TERM'

// Project Search
export const CLEAR_PROJECT_SEARCH       = 'CLEAR_PROJECT_SEARCH'
export const PROJECT_SEARCH             = 'PROJECT_SEARCH'
export const PROJECT_SEARCH_FAILURE     = 'PROJECT_SEARCH_FAILURE'
export const PROJECT_SEARCH_SUCCESS     = 'PROJECT_SEARCH_SUCCESS'
export const PROJECT_SEARCH_PENDING     = 'PROJECT_SEARCH_PENDING'
export const LOAD_MORE_PROJECTS         = 'LOAD_MORE_PROJECTS'
export const GET_PROJECTS               = 'GET_PROJECTS'
export const GET_PROJECTS_PENDING       = 'GET_PROJECTS_PENDING'
export const GET_PROJECTS_SUCCESS       = 'GET_PROJECTS_SUCCESS'
export const GET_PROJECTS_FAILURE       = 'GET_PROJECTS_FAILURE'
export const GET_PROJECTS_SEARCH_CRITERIA = 'GET_PROJECTS_SEARCH_CRITERIA'


// Delete project
export const DELETE_PROJECT             = 'DELETE_PROJECT'
export const DELETE_PROJECT_PENDING     = 'DELETE_PROJECT_PENDING'
export const DELETE_PROJECT_SUCCESS     = 'DELETE_PROJECT_SUCCESS'
export const DELETE_PROJECT_FAILURE     = 'DELETE_PROJECT_FAILURE'

// Project Search Suggestions (Typeahead)
export const CLEAR_PROJECT_SUGGESTIONS_SEARCH   = 'CLEAR_PROJECT_SUGGESTIONS_SEARCH'
export const PROJECT_SUGGESTIONS_SEARCH_FAILURE     = 'PROJECT_SUGGESTIONS_SEARCH_FAILURE'
export const PROJECT_SUGGESTIONS_SEARCH_SUCCESS     = 'PROJECT_SUGGESTIONS_SEARCH_SUCCESS'

// Project Dashboard
export const LOAD_PROJECT_DASHBOARD             = 'LOAD_PROJECT_DASHBOARD'
export const LOAD_PROJECT_DASHBOARD_PENDING     = 'LOAD_PROJECT_DASHBOARD_PENDING'
export const LOAD_PROJECT_DASHBOARD_FAILURE     = 'LOAD_PROJECT_DASHBOARD_FAILURE'
export const LOAD_PROJECT_DASHBOARD_SUCCESS     = 'LOAD_PROJECT_DASHBOARD_SUCCESS'

// Direct Project Data
export const LOAD_DIRECT_PROJECT             = 'LOAD_DIRECT_PROJECT'
export const LOAD_DIRECT_PROJECT_PENDING     = 'LOAD_DIRECT_PROJECT_PENDING'
export const LOAD_DIRECT_PROJECT_FAILURE     = 'LOAD_DIRECT_PROJECT_FAILURE'
export const LOAD_DIRECT_PROJECT_SUCCESS     = 'LOAD_DIRECT_PROJECT_SUCCESS'

// Direct Project Data
export const LOAD_ADDITIONAL_PROJECT_DATA             = 'LOAD_ADDITIONAL_PROJECT_DATA'
export const LOAD_ADDITIONAL_PROJECT_DATA_PENDING     = 'LOAD_ADDITIONAL_PROJECT_DATA_PENDING'
export const LOAD_ADDITIONAL_PROJECT_DATA_FAILURE     = 'LOAD_ADDITIONAL_PROJECT_DATA_FAILURE'
export const LOAD_ADDITIONAL_PROJECT_DATA_SUCCESS     = 'LOAD_ADDITIONAL_PROJECT_DATA_SUCCESS'

// Project Topics Load
export const LOAD_PROJECT_FEEDS                = 'LOAD_PROJECT_FEEDS'
export const LOAD_PROJECT_FEEDS_PENDING        = 'LOAD_PROJECT_FEEDS_PENDING'
export const LOAD_PROJECT_FEEDS_FAILURE        = 'LOAD_PROJECT_FEEDS_FAILURE'
export const LOAD_PROJECT_FEEDS_SUCCESS        = 'LOAD_PROJECT_FEEDS_SUCCESS'

// project topics load with members
export const LOAD_PROJECT_FEEDS_MEMBERS              = 'LOAD_PROJECT_FEEDS_MEMBERS'
export const LOAD_PROJECT_FEEDS_MEMBERS_PENDING      = 'LOAD_PROJECT_FEEDS_MEMBERS_PENDING'
export const LOAD_PROJECT_FEEDS_MEMBERS_SUCCESS      = 'LOAD_PROJECT_FEEDS_MEMBERS_SUCCESS'
export const LOAD_PROJECT_FEEDS_MEMBERS_FAILURE      = 'LOAD_PROJECT_FEEDS_MEMBERS_FAILURE'

// Create Project Topic
export const CREATE_PROJECT_FEED               = 'CREATE_PROJECT_FEED'
export const CREATE_PROJECT_FEED_PENDING       = 'CREATE_PROJECT_FEED_PENDING'
export const CREATE_PROJECT_FEED_SUCCESS       = 'CREATE_PROJECT_FEED_SUCCESS'
export const CREATE_PROJECT_FEED_FAILURE       = 'CREATE_PROJECT_FEED_FAILURE'

export const LOAD_PROJECT_FEED_COMMENTS                   = 'LOAD_PROJECT_FEED_COMMENTS'
export const LOAD_PROJECT_FEED_COMMENTS_PENDING           = 'LOAD_PROJECT_FEED_COMMENTS_PENDING'
export const LOAD_PROJECT_FEED_COMMENTS_SUCCESS           = 'LOAD_PROJECT_FEED_COMMENTS_SUCCESS'
export const LOAD_PROJECT_FEED_COMMENTS_FAILURE           = 'LOAD_PROJECT_FEED_COMMENTS_FAILURE'

// Create Topic Post
export const CREATE_PROJECT_FEED_COMMENT          = 'CREATE_PROJECT_FEED_COMMENT'
export const CREATE_PROJECT_FEED_COMMENT_PENDING  = 'CREATE_PROJECT_FEED_COMMENT_PENDING'
export const CREATE_PROJECT_FEED_COMMENT_SUCCESS  = 'CREATE_PROJECT_FEED_COMMENT_SUCCESS'
export const CREATE_PROJECT_FEED_COMMENT_FAILURE  = 'CREATE_PROJECT_FEED_COMMENT_FAILURE'

// Project Load
export const LOAD_PROJECT             = 'LOAD_PROJECT'
export const LOAD_PROJECT_PENDING     = 'LOAD_PROJECT_PENDING'
export const CLEAR_LOADED_PROJECT     = 'CLEAR_LOADED_PROJECT'
export const LOAD_PROJECT_FAILURE     = 'LOAD_PROJECT_FAILURE'
export const LOAD_PROJECT_SUCCESS     = 'LOAD_PROJECT_SUCCESS'

export const CREATE_PROJECT           = 'CREATE_PROJECT'
export const CREATE_PROJECT_PENDING   = 'CREATE_PROJECT_PENDING'
export const CREATE_PROJECT_SUCCESS   = 'CREATE_PROJECT_SUCCESS'
export const CREATE_PROJECT_FAILURE   = 'CREATE_PROJECT_FAILURE'

export const UPDATE_PROJECT           = 'UPDATE_PROJECT'
export const UPDATE_PROJECT_PENDING   = 'UPDATE_PROJECT_PENDING'
export const UPDATE_PROJECT_SUCCESS   = 'UPDATE_PROJECT_SUCCESS'
export const UPDATE_PROJECT_FAILURE   = 'UPDATE_PROJECT_FAILURE'

export const LOAD_MEMBERS             = 'LOAD_MEMBERS'
export const LOAD_MEMBERS_PENDING     = 'LOAD_MEMBERS_PENDING'
export const LOAD_MEMBERS_SUCCESS     = 'LOAD_MEMBERS_SUCCESS'
export const LOAD_MEMBERS_FAILURE     = 'LOAD_MEMBERS_FAILURE'

export const LOAD_MEMBER_SUGGESTIONS             = 'LOAD_MEMBER_SUGGESTIONS'
export const LOAD_MEMBER_SUGGESTIONS_PENDING     = 'LOAD_MEMBER_SUGGESTIONS_PENDING'
export const LOAD_MEMBER_SUGGESTIONS_SUCCESS     = 'LOAD_MEMBER_SUGGESTIONS_SUCCESS'
export const LOAD_MEMBER_SUGGESTIONS_FAILURE     = 'LOAD_MEMBER_SUGGESTIONS_FAILURE'

export const ADD_PROJECT_MEMBER             = 'ADD_PROJECT_MEMBER'
export const ADD_PROJECT_MEMBER_PENDING     = 'ADD_PROJECT_MEMBER_PENDING'
export const ADD_PROJECT_MEMBER_SUCCESS     = 'ADD_PROJECT_MEMBER_SUCCESS'
export const ADD_PROJECT_MEMBER_FAILURE     = 'ADD_PROJECT_MEMBER_FAILURE'

export const REMOVE_PROJECT_MEMBER             = 'REMOVE_PROJECT_MEMBER'
export const REMOVE_PROJECT_MEMBER_PENDING     = 'REMOVE_PROJECT_MEMBER_PENDING'
export const REMOVE_PROJECT_MEMBER_SUCCESS     = 'REMOVE_PROJECT_MEMBER_SUCCESS'
export const REMOVE_PROJECT_MEMBER_FAILURE     = 'REMOVE_PROJECT_MEMBER_FAILURE'

export const UPDATE_PROJECT_MEMBER             = 'UPDATE_PROJECT_MEMBER'
export const UPDATE_PROJECT_MEMBER_PENDING     = 'UPDATE_PROJECT_MEMBER_PENDING'
export const UPDATE_PROJECT_MEMBER_SUCCESS     = 'UPDATE_PROJECT_MEMBER_SUCCESS'
export const UPDATE_PROJECT_MEMBER_FAILURE     = 'UPDATE_PROJECT_MEMBER_FAILURE'


// Project attachments
export const ADD_PROJECT_ATTACHMENT         = 'ADD_PROJECT_ATTACHMENT'
export const ADD_PROJECT_ATTACHMENT_PENDING = 'ADD_PROJECT_ATTACHMENT_PENDING'
export const ADD_PROJECT_ATTACHMENT_SUCCESS = 'ADD_PROJECT_ATTACHMENT_SUCCESS'
export const ADD_PROJECT_ATTACHMENT_FAILURE = 'ADD_PROJECT_ATTACHMENT_FAILURE'

export const REMOVE_PROJECT_ATTACHMENT         = 'REMOVE_PROJECT_ATTACHMENT'
export const REMOVE_PROJECT_ATTACHMENT_PENDING = 'REMOVE_PROJECT_ATTACHMENT_PENDING'
export const REMOVE_PROJECT_ATTACHMENT_SUCCESS = 'REMOVE_PROJECT_ATTACHMENT_SUCCESS'
export const REMOVE_PROJECT_ATTACHMENT_FAILURE = 'REMOVE_PROJECT_ATTACHMENT_FAILURE'

export const UPDATE_PROJECT_ATTACHMENT         = 'UPDATE_PROJECT_ATTACHMENT'
export const UPDATE_PROJECT_ATTACHMENT_PENDING = 'UPDATE_PROJECT_ATTACHMENT_PENDING'
export const UPDATE_PROJECT_ATTACHMENT_SUCCESS = 'UPDATE_PROJECT_ATTACHMENT_SUCCESS'
export const UPDATE_PROJECT_ATTACHMENT_FAILURE = 'UPDATE_PROJECT_ATTACHMENT_FAILURE'

export const THREAD_MESSAGES_PAGE_SIZE = 3
/*
 * Project status
 */
export const PROJECT_STATUS_DRAFT = 'draft'

/*
 * Project member role
 */
export const PROJECT_ROLE_COPILOT = 'copilot'
export const PROJECT_ROLE_MANAGER = 'manager'
export const PROJECT_ROLE_CUSTOMER = 'customer'
export const PROJECT_ROLE_OWNER = 'owner'

/*
 * Events
 */
export const EVENT_ROUTE_CHANGE = 'event.route_change'

/*
 * User Roles
 */
export const ROLE_TOPCODER_USER = 'Topcoder User'
export const ROLE_CONNECT_COPILOT = 'Connect Copilot'
export const ROLE_CONNECT_MANAGER = 'Connect Manager'
export const ROLE_ADMINISTRATOR = 'administrator'

// FIXME .. remove defaults
export const FILE_PICKER_API_KEY = process.env.FILE_PICKER_API_KEY || 'AzFINuQoqTmqw0QEoaw9az'
export const FILE_PICKER_SUBMISSION_CONTAINER_NAME = process.env.FILE_PICKER_SUBMISSION_CONTAINER_NAME || 'submission-staging-dev'
export const PROJECT_ATTACHMENTS_FOLDER = process.env.PROJECT_ATTACHMENTS_FOLDER || 'PROJECT_ATTACHMENTS'

/*
 * URLs
 */
export const DOMAIN = process.env.domain || 'topcoder.com'
export const CONNECT_DOMAIN = `connect.${DOMAIN}`
export const ACCOUNTS_APP_CONNECTOR_URL = process.env.ACCOUNTS_APP_CONNECTOR_URL
export const ACCOUNTS_APP_LOGIN_URL = `https://accounts.${DOMAIN}/connect`
export const ACCOUNTS_APP_REGISTER_URL = `https://accounts.${DOMAIN}/connect/registration`

export const TC_API_URL = `https://api.${DOMAIN}`
export const DIRECT_PROJECT_URL = `https://www.${DOMAIN}/direct/projectOverview?formData.projectId=`
export const SALESFORCE_PROJECT_LEAD_LINK = process.env.SALESFORCE_PROJECT_LEAD_LINK

export const PROJECT_NAME_MAX_LENGTH = 255

export const PROJECT_STATUS_COMPLETED = 'completed'
export const PROJECT_STATUS_CANCELLED = 'cancelled'

export const PROJECT_STATUS = [
  {color: 'gray', name: 'Draft', value: 'draft'},
  {color: 'gray', name: 'In Review', value: 'in_review'},
  {color: 'gray', name: 'Reviewed', value: 'reviewed'},
  {color: 'green', name: 'Active', value: 'active'},
  {color: 'black', name: 'Completed', value: PROJECT_STATUS_COMPLETED },
  {color: 'black', name: 'Cancelled', value: PROJECT_STATUS_CANCELLED },
  {color: 'red', name: 'Paused', value: 'paused'}
]

export const PROJECT_FEED_TYPE_PRIMARY  = 'PRIMARY'
export const PROJECT_FEED_TYPE_MESSAGES = 'MESSAGES'

export const DISCOURSE_BOT_USERID = 'system'
export const CODER_BOT_USERID = 'system'
export const CODER_BOT_USER_FNAME = 'Coder'
export const CODER_BOT_USER_LNAME = 'Bot'

export const PROJECT_MAX_COLORS = 5

export const AUTOCOMPLETE_TRIGGER_LENGTH = 3

export const HEAP_ANALYTICS_APP_ID = process.env.HEAP_ANALYTICS_APP_ID || '4153837120'