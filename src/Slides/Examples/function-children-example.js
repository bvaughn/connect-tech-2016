const source = `function WithUser ({ children }) {
  // It is not important where user comes from for this example
  return children({ user })
}

function WithLocalization ({ children }) {
  // It is not important where locale info comes from for this example
  return children({ localization })
}

function LocalizedUserBadge () {
  return (
    <WithLocalization>
      {({ localization }) => (
        <WithUser>
          {({ user }) => (
            <h1>
              {localization.get('user_greeting', { name: user.name })}
            </h1>
          )}
        </WithUser>
      )}
    </WithLocalization>
  )
}`

export default source
