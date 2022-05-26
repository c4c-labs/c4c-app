import React from 'react';
import { Message, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const StatusMessage = ({ status, ...props }) => {
  console.log('loading status', status);
  const { loading, error, success, warning } = status;
  return (
    <div
      style={{
        paddingTop: '20px',
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
      {status ? (
        <div style={{ color: 'white' }}>
          <Message
            compact
            icon
            negative={Boolean(status.error)}
            success={Boolean(status.success) && !status.loading}
            info={Boolean(status.loading)}
            warning={Boolean(status.warning)}>
            <Icon
              name={
                status.loading
                  ? 'circle notched'
                  : status.error
                  ? 'times circle'
                  : status.success
                  ? 'check circle'
                  : 'exclamation circle'
              }
              loading={Boolean(status.loading)}
            />
            <Message.Content>
              {Boolean(status.success) && !status.loading && (
                <Message.Header>Transaction Success!</Message.Header>
              )}
              {status.loading
                ? status.loading
                : status.error
                ? status.error
                : status.success
                ? status.success
                : status.warning}
            </Message.Content>
          </Message>
        </div>
      ) : null}
    </div>
  );
};

StatusMessage.propTypes = {
  status: PropTypes.shape({
    loading: PropTypes.string,
    error: PropTypes.string,
    success: PropTypes.string,
    warning: PropTypes.string
  })
};

export default StatusMessage;
