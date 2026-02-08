import { SignOutButton } from '@/components/sign-out-button'
import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import { SignedIn, SignedOut, useSession, useUser } from '@clerk/clerk-expo'
import { Link } from 'expo-router'
import { StyleSheet } from 'react-native'

export default function Page() {
  const { user } = useUser()


  const { session } = useSession()
  console.log(session?.currentTask)

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Welcome!</ThemedText>
    
      <SignedOut>
        <Link href="/(auth)/sign-in">
          <ThemedText>Sign in</ThemedText>
        </Link>
        <Link href="/(auth)/sign-up">
          <ThemedText>Sign up</ThemedText>
        </Link>
      </SignedOut>
    
      <SignedIn>
        <ThemedText>Hello {user?.username}</ThemedText>
        <SignOutButton />
      </SignedIn>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 16,
  },
})
