const source = `function WithUser ({ children }) {
  return children({ user })
}

function WithLocalization ({ children }) {
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
