import type {Config} from 'jest'

const config: Config ={
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', './src'],
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(scss|sass|css)$": "identity-obj-proxy",
    "@/(.*)": "<rootDir>/src/$1"
  }
}

export default config;
