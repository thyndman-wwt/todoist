import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { firebase } from '../firebase';

/**
 * SignIn component for user authentication.
 * Provides email/password sign-in and sign-up functionality with Firebase.
 * Includes keyboard navigation support and ARIA labels for accessibility.
 *
 * @component
 * @returns {React.ReactElement} The sign-in form with email and password inputs
 */
export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isSignUp) {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
      } else {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !loading) {
      handleSignIn(e);
    }
  };

  return (
    <div className="signin-container" data-testid="signin-container">
      <div className="signin-card" data-testid="signin-card">
        <h1 className="signin-title">Todoist</h1>
        <form
          className="signin-form"
          onSubmit={handleSignIn}
          data-testid="signin-form"
        >
          <div className="signin-form__group">
            <label htmlFor="signin-email" className="signin-label">
              Email
            </label>
            <input
              id="signin-email"
              type="email"
              className="signin-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
              aria-label="Email address"
              aria-required="true"
              required
              data-testid="signin-email"
              disabled={loading}
            />
          </div>

          <div className="signin-form__group">
            <label htmlFor="signin-password" className="signin-label">
              Password
            </label>
            <input
              id="signin-password"
              type="password"
              className="signin-input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
              aria-label="Password"
              aria-required="true"
              required
              data-testid="signin-password"
              disabled={loading}
            />
          </div>

          {error && (
            <div
              className="signin-error"
              role="alert"
              aria-live="polite"
              data-testid="signin-error"
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            className="signin-button"
            aria-label={isSignUp ? 'Create new account' : 'Sign in to account'}
            disabled={loading}
            data-testid="signin-submit"
          >
            {loading ? 'Loading...' : isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        <div className="signin-toggle">
          <span>
            {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
          </span>
          <button
            type="button"
            className="signin-toggle-button"
            onClick={() => {
              setIsSignUp(!isSignUp);
              setError('');
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setIsSignUp(!isSignUp);
                setError('');
              }
            }}
            aria-label={
              isSignUp ? 'Switch to sign in mode' : 'Switch to sign up mode'
            }
            data-testid="signin-toggle"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
};
