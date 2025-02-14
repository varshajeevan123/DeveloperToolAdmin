import React, { useState } from 'react';
import { Content, Header, Page } from '@backstage/core-components';
import { Button, TextField, Grid } from '@mui/material';

export const AddUserPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [group, setGroup] = useState('');

  const handleSubmit = async () => {
    const newUser = {
      apiVersion: 'backstage.io/v1alpha1',
      kind: 'User',
      metadata: { name },
      spec: {
        profile: { email },
        memberOf: [group],
      },
    };

    const response = await fetch('/api/catalog/entities', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    });

    if (response.ok) {
      alert('User added successfully!');
    } else {
      alert('Failed to add user');
    }
  };

  return (
    <Page themeId="tool">
      <Header title="Add a New User" subtitle="Create a user in Backstage" />
      <Content>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Name" fullWidth onChange={(e) => setName(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email" fullWidth onChange={(e) => setEmail(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Group" fullWidth onChange={(e) => setGroup(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Add User
            </Button>
          </Grid>
        </Grid>
      </Content>
    </Page>
  );
};
